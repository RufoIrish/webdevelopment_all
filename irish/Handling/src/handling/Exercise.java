/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package handling;

import java.io.BufferedWriter;
import java.io.File;
import java.io.IOException;
import java.util.InputMismatchException;
import java.util.Scanner;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author 2ndyrGroupC
 */
public class Exercise extends Used {

    public Exercise() {
    }

    int idP = 0;
    int iduN = 0;
    int idUI = 0;
    int idS = 0;
    int idPC=0;

    String usersAndPass = "C:\\Users\\rufoir_sd2053\\Desktop\\usersAndPass.txt";
    String userInfo = "C:\\Users\\rufoir_sd2053\\Desktop\\userInfo.txt";
    String schedules = "C:\\Users\\rufoir_sd2053\\Desktop\\schedules.txt";

    File file = new File(usersAndPass);
    File file2 = new File(userInfo);
    File file3 = new File(schedules);

    List<String> namePass = new ArrayList<>();
    List<String> userInformation = new ArrayList<>();
    List<String> schedule = new ArrayList<>();

    public void save() {
        try {
            if (!file.exists()) {
                file.createNewFile();
                file2.createNewFile();
                file3.createNewFile();
            }
            FileWriter fw = new FileWriter(file.getAbsoluteFile());
            FileWriter fw2 = new FileWriter(file2.getAbsoluteFile());
            BufferedWriter bw = new BufferedWriter(fw);
            BufferedWriter bw2 = new BufferedWriter(fw2);
            FileWriter fw3 = new FileWriter(file3.getAbsoluteFile());
            BufferedWriter bw3 = new BufferedWriter(fw3);
            for (String b : userInformation) {
                bw2.write(b);
                bw2.newLine();
            }
            for (String a : namePass) {
                bw.write(a);
                bw.newLine();
            }
            for (String a : schedule) {
                bw3.write(a);
                bw3.newLine();
            }
            bw.close();
            bw2.close();
            bw3.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    Scanner input = new Scanner(System.in);

    public void checkUsername() {
        String uname = "";
        boolean status = true;
        while (status != false) {
            System.out.print("username : ");
            try {
                int b = input.nextInt();
            } catch (InputMismatchException e) {
                uname = input.nextLine();
                status = false;
            }

        }
        super.setUsername(uname);
    }

    public void checkPass() {
        String pass = "";
        String confirmPass = "";
        boolean status = true;
        boolean status1 = true;

        while (status == true) {
            System.out.print("Password: ");
            try {
                pass = input.nextLine();
                if (pass.length() >= 8) {
                    status = false;
                    while (status1 == true) {
                        System.out.println("confirm password: ");
                        try {
                            confirmPass = input.nextLine();
                            if (pass.equals(confirmPass)) {
                                status1 = false;
                            }
                        } catch (InputMismatchException e) {
                            confirmPass = input.nextLine();
                        }
                    }
                };
            } catch (InputMismatchException e) {
                pass = input.nextLine();
                status = true;
            }
        }
        super.setPassword(pass);
    }

    public void checkFname() {
        String fname = "";
        boolean status = true;
        while (status != false) {
            System.out.print("FirstName : ");
            try {
                int b = input.nextInt();
            } catch (InputMismatchException e) {
                fname = input.nextLine();
                status = false;
            }
        }
        super.setFirstName(fname);
    }

    public void checkLname() {
        String lname = "";
        boolean status = true;
        while (status != false) {
            System.out.print("LastName : ");
            try {
                int b = input.nextInt();
            } catch (InputMismatchException e) {
                lname = input.nextLine();
                status = false;
            }

        }
        System.out.println(lname);
        super.setLastName(lname);
    }


    public void addList() {
        idP = iduN;
        namePass.add(iduN + " :  " + super.getUsername() + "   :  " + super.getPassword());
        userInformation.add(idUI + "  :  " + idP + "  :  " + super.getFirstName() + "   :  "
                + super.getLastName() + "   :   " + super.getAge());
        iduN++;
        idUI++;

    }

    public void checkSchedule() {
        String sched = "";
        boolean status = true;
        while (status != false) {
            System.out.print("Schedule : ");
            try {
                int b = input.nextInt();
            } catch (InputMismatchException e) {
                sched = input.nextLine();
                status = false;
            }
        }
        super.setSchedule(sched);
    }
    
    public void checkAge() {
        int agein;
        while (true) {
            System.out.println("Enter your age: ");
            String age = input.nextLine();
            try {
                agein = (Integer.parseInt(age));
                break;
            } catch (IllegalArgumentException e) {
                age = input.nextLine();
            }
        }
        super.setAge(agein);
    }

    public void checkUnit() {
        int unitin;
        while (true) {
            System.out.println("Unit: ");
            String unit = input.nextLine();
            try {
                unitin = (Integer.parseInt(unit));
                break;
            } catch (IllegalArgumentException e) {
                unit = input.nextLine();
            }
        }
        super.setUnit(unitin);
    }

    public void checkCourse() {
        String course = "";
        boolean status = true;
        while (status != false) {
            System.out.print("Course : ");
            try {
                int b = input.nextInt();
            } catch (InputMismatchException e) {
                course = input.nextLine();
                status = false;
            }
        }
        super.setCourse(course);
    }

    public void checkSubject() {
        idPC = iduN;
        int s = 1;
        String sub = "";
        boolean status1 = true;
        boolean status = true;
        this.checkCourse();
        while (status != false) {
            System.out.print("Add subject : Yes/No? : ");
            try {
                int b = input.nextInt();
            } catch (InputMismatchException e) {
                while (status1 == true) {
                    System.out.print("Add subject : Yes/No?");
                    String res = input.nextLine().toLowerCase();
                    if (res.contains("yes")) {
                        System.out.print("number subject/s: ");
                        int i = input.nextInt();
                        while (i != 0) {
                            System.out.print(s + " subject: ");
                            sub = input.next();
                            super.setSubject(sub);
                            this.checkUnit();
                            this.checkSchedule();
                            s++;
                            i--;
                            this.schedule.add(idS + "  :  " + idPC + "   :  "
                                    + " " + super.getCourse() + "   :    " + super.getSubject() + "  :  " + super.getUnit() + " "
                                            + "  :  " + super.getSchedule());
                            idS++;
                        }
                        status1 = false;
                        status = false;
                    } else if (res.contains("no")) {
                        status1 = false;
                        status = false;
                    }
                }
            }
        }

    }

    public void display() {
        int a = 2;
        while (a != -1) {
            checkUsername();
            checkPass();
            checkFname();
            checkLname();
            this.checkAge();
            checkSubject();
            addList();
            save();
            System.out.println(a + " more accounts!");
            a--;
        }
    }

}
