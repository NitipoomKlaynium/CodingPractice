using System;

namespace CS
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Person p1 = new Employee("Pure", 22, 100f, "Developer", "Male");
            Console.WriteLine(p1.introduce());
        }
    }
}