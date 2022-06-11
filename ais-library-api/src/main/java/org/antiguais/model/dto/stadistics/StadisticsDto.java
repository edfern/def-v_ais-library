package org.antiguais.model.dto.stadistics;

public class StadisticsDto {
    private int students;
    private int teachers;
    private int books;
    private int loans;
    private StadisticsLoansMonths stadisticsLoansMonthsTeacher;
    private StadisticsLoansMonths stadisticsLoansMonthsStudent;

    public StadisticsDto(int students, int teachers, int books, int loans, StadisticsLoansMonths stadisticsLoansMonthsTeacher, StadisticsLoansMonths stadisticsLoansMonthsStudent) {
        this.students = students;
        this.teachers = teachers;
        this.books = books;
        this.loans = loans;
        this.stadisticsLoansMonthsTeacher = stadisticsLoansMonthsTeacher;
        this.stadisticsLoansMonthsStudent = stadisticsLoansMonthsStudent;
    }

    public StadisticsLoansMonths getStadisticsLoansMonthsStudent() {
        return stadisticsLoansMonthsStudent;
    }

    public void setStadisticsLoansMonthsStudent(StadisticsLoansMonths stadisticsLoansMonthsStudent) {
        this.stadisticsLoansMonthsStudent = stadisticsLoansMonthsStudent;
    }

    public int getStudents() {
        return students;
    }

    public void setStudents(int students) {
        this.students = students;
    }

    public int getTeachers() {
        return teachers;
    }

    public void setTeachers(int teachers) {
        this.teachers = teachers;
    }

    public int getBooks() {
        return books;
    }

    public void setBooks(int books) {
        this.books = books;
    }

    public int getLoans() {
        return loans;
    }

    public void setLoans(int loans) {
        this.loans = loans;
    }

    public StadisticsLoansMonths getStadisticsLoansMonthsTeacher() {
        return stadisticsLoansMonthsTeacher;
    }

    public void setStadisticsLoansMonthsTeacher(StadisticsLoansMonths stadisticsLoansMonthsTeacher) {
        this.stadisticsLoansMonthsTeacher = stadisticsLoansMonthsTeacher;
    }
}
