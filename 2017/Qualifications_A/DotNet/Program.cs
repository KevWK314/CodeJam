using System;
using System.Diagnostics;
using System.IO;

namespace CodeJam
{
    class Program
    {
        static void Main(string[] args)
        {
            if (args.Length == 0)
            {
                Console.WriteLine("Input file please");
                return;
            }

            string filename = args[0];
            var runs = PancakeFiles.Read(filename);

            Stopwatch sw = new Stopwatch();
            sw.Start();

            var engine = new PancakeEngine();
            var results = engine.Run(runs, Console.WriteLine);

            sw.Stop();

            PancakeFiles.Write(results, $"{filename}.out");

            Console.WriteLine($"The file was processed in {sw.Elapsed}");
            Console.ReadKey();
        }

        private static void TestRun()
        {
            Console.WriteLine("Test Run...");
            var pancakeManager = new PancakeRunner();
            var result = pancakeManager.Process(new PancakeRun(1, "---+-++-", 3));
            Console.WriteLine("Result for [---+-++- 3] is {0}", result.ResultText);

            result = pancakeManager.Process(new PancakeRun(1, "+++++", 4));
            Console.WriteLine("Result for [+++++ 4] is {0}", result.ResultText);

            result = pancakeManager.Process(new PancakeRun(1, "-+-+-", 4));
            Console.WriteLine("Result for [-+-+- 4] is {0}", result.ResultText);
        }
    }
}
