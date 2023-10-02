namespace CS {
    class Employee: Person {
        protected float salary { get; }
        protected String position { get; }

        public Employee(String name, int age, float salary, String position, String gender = "Not specified") : base(name, age, gender) {
            this.salary = salary;
            this.position = position;
        }

        public override String introduce() {
            return $"{base.introduce()} Currently, I'm {this.position} earning ${this.salary} per year.";
        }
    }
}