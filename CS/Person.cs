namespace CS {

    class Person {
        protected String name { get; }
        protected int age { get; }
        protected String gender { get; }

        public Person(String name, int age, String gender = "Not specified") {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }

        virtual public String introduce() {
            return $"Hi, my name is {this.name} and I'm {this.age} years old.";
        }
    }
}
