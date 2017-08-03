using System.Collections;
using System.Linq;
using System.Text;

namespace CodeJam
{
    public class PancakeRunner
    {
        private const char Happy = '+';
        private const char NotHappy = '-';

        public PancakeResult Process(PancakeRun run)
        {
            var res = Process(run.Data, run.FlipperSize);
            return new PancakeResult(run, res);
        }

        private int? Process(string state, int flipperSize)
        {
            if (IsSuccess(state))
            {
                return 0;
            }

            var currentState = state;
            var flipCount = 0;

            for (int loop = 0; loop < state.Length; loop++)
            {
                if (currentState[loop] == NotHappy)
                {
                    currentState = TryFlip(currentState, loop, flipperSize);
                    flipCount++;

                    if (currentState == null)
                    {
                        return null;
                    }

                    if (IsSuccess(currentState))
                    {
                        return flipCount;
                    }
                }
            }

            return null;
        }

        private static string TryFlip(string state, int start, int flipperSize)
        {
            if (start + flipperSize > state.Length)
            {
                return null;
            }

            var newState = new StringBuilder(state);
            for (int loop = start; loop < start + flipperSize; loop++)
            {
                newState[loop] = newState[loop] == NotHappy ? Happy : NotHappy;
            }
            return newState.ToString();
        }

        private static bool IsSuccess(string state)
        {
            return state.All(x => x != NotHappy);
        }
    }
}
