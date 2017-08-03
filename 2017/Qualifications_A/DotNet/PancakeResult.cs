namespace CodeJam
{
    public class PancakeResult
    {
        public PancakeResult(PancakeRun run, int? result)
        {
            Run = run;
            Result = result;
        }

        public PancakeRun Run
        {
            get;
        }

        public int? Result
        {
            get;
        }

        public string ResultText
        {
            get { return GetResultText(); }
        }

        private string GetResultText()
        {
            var text = Result.HasValue ? Result.ToString() : "IMPOSSIBLE";
            return $"Case #{Run.Number}: {text}";
        }
    }
}
