#include <iostream>
#include <cstring>
#include <memory>
using namespace std;
class MyString {
unique_ptr<char[]> str;
public:
MyString() : str{nullptr} { // Default Constructor
    str = make_unique<char[]>(1);
    str[0] = '\0';
};
MyString(char* val) { // Constructor with 1 arguments
    if (val == nullptr) {
        str = make_unique<char[]>(1);
        str[0] = '\0';
    }
    else {
        str = make_unique<char[]>(strlen(val) + 1);
        strcpy(str.get(), val);
        str[strlen(val)] = '\0';
        cout << "The given string is: "
        << str.get() << endl;
    }
}
MyString(const MyString& source) : str() { // Copy Constructor
    str = make_unique<char[]>(strlen(source.str.get()) + 1);
    strcpy(str.get(), source.str.get());
    str[strlen(source.str.get())] = '\0';
}
MyString(MyString&& source) { // Move Constructor
    str = move(source.str);
    source.str = nullptr;
}
~MyString() { } // Destructor
};
int main(void) {
    cout << "Start!" << endl;
    MyString a;
    MyString b{ (char*)"Hello" };
    MyString c{ a };
    MyString d{ MyString{ (char*)"World" } };
    cout << "Bye" << endl;
}


/*
Justification: 
I changed str from a char* to a unique_ptr<char[]> (Updating everything to smart ptrs)
Updated all instances of new to make_unique<>, added .get() to the usages of the str because smart pointers are used instead of char*
Used move() in the move constructor to allow me to move without errors

I believe this code meets RAII :

-The resource is relinquished in destructor (smart pointers should be automatically handled)
-Instances of MyString are stack-allocated
-The resource (make_unique? ) is aquired in the constructor


Valgrind: 
==1686410== 
==1686410== HEAP SUMMARY:
==1686410==     in use at exit: 0 bytes in 0 blocks
==1686410==   total heap usage: 6 allocs, 6 frees, 73,742 bytes allocated
==1686410== 
==1686410== All heap blocks were freed -- no leaks are possible
==1686410== 
==1686410== For lists of detected and suppressed errors, rerun with: -s
==1686410== ERROR SUMMARY: 0 errors from 0 contexts (suppressed: 0 from 0)

This seems to have stopped all leaks
*/