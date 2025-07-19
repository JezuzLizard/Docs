main()
{
    // this function does not exist, therefore will return undefined
    non_existent_function = getfunction( "maps/_utility", "dummy" );
    assert( !isdefined( non_existent_function ) );

    // this function exists, therefore will return a function pointer
    existent_function = getfunction( "maps\\_utility", "flag" ); // you can use either forward slashes or backslashes (make sure to escape backslashes in strings)
    assert( isdefined( existent_function ) );

    // call the function pointer
    flag = [[ existent_function ]]( "flag_name" );
    flag2 = maps\_utility::flag( "flag_name" ); // this is the same as the previous line, but this will trigger the script to be compiled and linked (woudl error if it doesnt exist normally)
    assert( flag == flag2 );
}