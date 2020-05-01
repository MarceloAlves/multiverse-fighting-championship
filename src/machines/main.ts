import { Machine, assign } from 'xstate'

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

interface MachineState {
  states: {
    idle: {}
    running: {
      states: {
        awaitingSelection: {}
      }
    }
    results: {}
  }
}

export interface MachineContext {
  winners: { id: number; round: number }[]
  fighters: number[]
  winner: number | null
}

type StartEvent = { type: 'START' }
type PickWinnerEvent = { type: 'PICK_WINNER'; selection: number }
type RestartEvent = { type: 'RESTART' }

export type MachineEvents = StartEvent | PickWinnerEvent | RestartEvent

/** Viz: https://xstate.js.org/viz/?gist=d28649f1f2d193546411816176307287 */
export const mainMachine = Machine<MachineContext, MachineState, MachineEvents>(
  {
    id: 'main',
    initial: 'idle',
    context: {
      winners: [],
      fighters: [],
      winner: null,
    },
    states: {
      idle: {
        entry: 'setInitialFighters',
        on: {
          START: 'running',
        },
      },
      running: {
        id: 'running',
        initial: 'awaitingSelection',
        states: {
          awaitingSelection: {
            on: {
              '': {
                cond: (ctx) => ctx.winners.length === 10,
                actions: 'declareWinner',
                target: '#main.results',
              },
              PICK_WINNER: {
                actions: ['addWinner', 'nextFighters'],
              },
            },
          },
        },
      },
      results: {
        on: {
          RESTART: {
            actions: 'setInitialFighters',
            target: '#main.running',
          },
        },
      },
    },
  },
  {
    actions: {
      addWinner: assign({
        winners: (ctx, evt: any) => ctx.winners.concat({ id: evt.selection, round: ctx.winners.length + 1 }),
      }),
      setInitialFighters: assign({
        winners: (_ctx) => [],
        fighters: (_ctx) => [randomNumber(1, 245), randomNumber(246, 493)],
      }),
      nextFighters: assign({
        fighters: (_ctx, evt: any) => [evt.selection, randomNumber(1, 493)],
      }),
      declareWinner: assign({
        winner: (ctx, _evt) => ctx.winners[ctx.winners.length - 1].id,
      }),
    },
  }
)
