main()
{
    og_func = replacefunc( maps\_utility::flag, flag_hook );

    // lets call flag without calling our hook just this one time
    disabledetouronce( og_func );
    flag = [[ og_func ]]( "flag_name" );
}

flag_hook( str )
{
    // lets say we just want to hook this function, then call the original, disabledetouronce is used for this
    iprintln( "flag was called with " + str );

    // now call original
    og_func = maps\_utility::flag;
    disabledetouronce( og_func );
    answer = self [[ og_func ]]( str );

    iprintln( "returning " + answer );
    return answer;
}