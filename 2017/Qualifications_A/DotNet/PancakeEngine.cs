using System;
using System.Collections.Generic;
using System.Linq;

namespace CodeJam
{
    public class PancakeEngine
    {
        public PancakeResult[] Run(PancakeRun[] runs, Action<string> logResult)
        {
            var runner = new PancakeRunner();

            return runs.Select(run =>
            {
                var result = runner.Process(run);
                logResult?.Invoke($"#{result.Run.Number}: [{result.Run.Data} {result.Run.FlipperSize}] ...  {result.ResultText}");

                return result;
            }).ToArray();
        }
    }
}
