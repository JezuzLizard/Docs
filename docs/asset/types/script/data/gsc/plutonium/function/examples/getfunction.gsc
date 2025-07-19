main()
{
    // this function does not exist, therefore will return undefined
    non_existent_function_pointer = getfunction( "maps/_utility", "dummy" );
    assert( !isdefined( non_existent_function_pointer ) );

    // this function exists, therefore will return a function pointer
    existent_function_pointer = getfunction( "maps\\_utility", "flag" ); // you can use either forward slashes or backslashes (make sure to escape backslashes in strings)
    assert( isdefined( existent_function_pointer ) );

    // call the function pointer
    flag = [[ existent_function_pointer ]]( "flag_name" );
    flag2 = maps\_utility::flag( "flag_name" ); // this is the same as the previous line, but this will trigger the script to be compiled and linked (would error if it didnt exist)
    assert( flag == flag2 );
}