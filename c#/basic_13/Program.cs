using System;
using System.Collections.Generic;

namespace basic_13
{
    public class Program
    {
        public static void greaterThanY(int[] arr, int y){
            for (int i = 0; i < arr.Length; i++){
                if(arr[i] > y){
                    Console.WriteLine(arr[i]);
                }
            }
        }
        public static void square(int[] arr){
            for (int i = 0; i< arr.Length; i++){
                arr[i] = arr[i] * arr[i];
                Console.WriteLine(arr[i]);
            }
        }
        static void Main(string[] args)
        {
            int[] arr = {1,-3,5,7,-9,13};
            // print from 0 - 255
            // for (int i = 0; i <= 255; i++)
            // {
            //     Console.WriteLine("i is " + i);
            // }
            // print 0- 255 only negatives 
            // for (int i = 0; i <= 255; i++)
            // {
            //     if(i % 2 !=  0){
            //         Console.WriteLine(i);
            //     }
            // }
            // PRINT ODDS FROM 1-255
            // int sum = 0;
            // for (int i = 0; i <= 255; i++)
            // {
            //     sum += i;
            //     Console.WriteLine(sum);
            // }

            //Iterate through array
            //     for (int idx = 0; idx < numArray2.Length; idx++){
            //     Console.WriteLine("array value {0}", numArray2[idx]);
            // }

            //Find Max
            // int max = numArray2[0];
            // for (int i = 0; i < numArray2.Length; i++){
            //     if(max < numArray2[i]){
            //         max = numArray2[i];
            //     }
            //     Console.WriteLine(max);
            // }
            // Get Average
            // int sum = 0;
            // for (int i = 0; i < numArray2.Length; i++){
            //     sum += numArray2[i];
            //     Console.WriteLine(sum);
            // }
            
            // Console.WriteLine(sum / numArray2.Length);

            // array with odd numbers
            //  for (int i = 0; i < numArray2.Length; i++){
            //      if(numArray2[i] < 0){
            //          Console.WriteLine(numArray2[i]);
            //      }
            //  }

            // greaterThanY(arr,2);
            square(arr);
        }
       
    }
}


using System;
using System.Collections.Generic;
using System.Linq;

namespace ConsoleApplication
{
    public class Program
    {
        public int[] RandomArray() {
            Random rand = new Random();
            int[] randArr = new int[10];
            int sum = 0;
            for(int idx = 0; idx < randArr.Length; idx++) {
                //Up to 26 since .Next is non-inclusive
                int val = rand.Next(5,26);
                randArr[idx] = val;
                sum += val;
            }
            Console.WriteLine("The max value of the random array is {0}", randArr.Max());
            Console.WriteLine("The min value of the random array is {0}", randArr.Min());
            return randArr;
        }

        public string TossCoin(Random rand) {
            Console.WriteLine("Tossing a Coin!");
            string result = "Tails";
            if(rand.Next() == 0) {
                result = "Heads";
            }
            Console.WriteLine(result);
            return result;
        }

        public Double TossMultipleCoins(int num){
            int numHeads = 0;
            for(int reps = 0; reps < num; reps++){
                if(TossCoin(new Random()) == "Heads"){
                    numHeads++;
                }
            }
            return (double)numHeads/(double)num;
        }

        public string[] Names() {
            string[] names = new string[5] {"Todd","Tiffany","Charlie","Geneva","Sydney"};
            //Fisher-Yates Shuffle
            Random rand = new Random();
            for(var idx = 0; idx < names.Length - 1; idx++){
                int randIdx = rand.Next(idx + 1, names.Length - 1);
                string temp = names[idx];
                names[idx] = names[randIdx];
                names[randIdx] = temp;
                //Print each name in it's new position
                Console.WriteLine(names[idx]);
            }
            //Don't forget the last value!
            Console.WriteLine(names[names.Length - 1]);

            //Return an array the only includes names longer than 5
            List<string> nameList = new List<string>();
            foreach(var name in names) {
                nameList.Add(name);
            }
            return nameList.ToArray();
        }

        public static void Main(string[] args)
        {
            //Invoke all functions here!
        }
    }
}