using System.Collections;

namespace CodeJam
{
    public class PancakeRun
    {
        public PancakeRun(int number, string data, int flipperSize)
        {
            Number = number;
            Data = data;
            FlipperSize = flipperSize;
        }

        public int Number
        {
            get;
        }

        public string Data
        {
            get; 
        }

        public int FlipperSize
        {
            get;
        }
    }
}
