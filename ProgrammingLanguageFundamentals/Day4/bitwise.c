#include <stdio.h>

int main()
{
    int a = 0;
    int b = 2;

    //* Logical operator
    int and = a || b;
    printf("%d\n", and);

    //! Bitwise operators
    //? 1 -> 01
    //? 2 -> 10
    //? |    11 -> 3

    int bitwise = a & b;
     

}