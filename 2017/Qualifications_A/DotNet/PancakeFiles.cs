using System.IO;
using System.Linq;
using System.Text;

namespace CodeJam
{
    public static class PancakeFiles
    {
        public static PancakeRun[] Read(string filename)
        {
            var lines = File.ReadAllLines(filename);
            var runs = int.Parse(lines[0]);

            return Enumerable.Range(1, runs).Select(x => Create(x, lines[x])).ToArray();
        }

        public static void Write(PancakeResult[] results, string filename)
        {
            var text = new StringBuilder();
            foreach (var result in results)
            {
                text.AppendLine(result.ResultText);
            }

            File.WriteAllText(filename, text.ToString());
        }

        private static PancakeRun Create(int number, string text)
        {
            var tokens = text.Split(new char[] { ' ' });
            return new PancakeRun(number, tokens[0], int.Parse(tokens[1]));
        }
    }
}
