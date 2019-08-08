namespace consoleApplication{
    
    // public class Human{
    //     public string name;
    //     int intelligence = 3;
    //     int strength = 3;
    //     int health = 100;
    //     int dexterity = 3;
     public class Human{
        public string name;
        public int intelligence;
        public int strength;
        public int health;
        public int dexterity;
    // public Human(string val){
    //     name = val;
    //  }
    public Human(string n, int I, int str, int h, int dex){
        name = n;
        intelligence = I;
        strength = str;
        health = h;
        dexterity = dex;
    }
    public void Attack(object target){
        Human enemy = target as Human;
        enemy.health -= strength * 5;
        } 
    }
}