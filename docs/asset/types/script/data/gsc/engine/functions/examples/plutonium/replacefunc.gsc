main()
{
    func_pointer = replacefunc( getfunction( "maps/_utility", "flag" ), ::our_replaced_func_with_low_prio, -1 );
    func_pointer2 = replacefunc( maps\_utility::flag, ::our_replaced_func, 1 );

    assert( func_pointer == maps\_utility::flag );
    assert( func_pointer == getfunction( "maps/_utility", "flag" ) );
    assert( func_pointer == func_pointer2 );
    assert( getfunctionname( func_pointer ) == "maps/_utility::flag" );
}

our_replaced_func( str )
{
    // This function will be called instead of maps\_utility::flag
    // when the script VM executes the original function.
    // You can add your custom logic here.
    level._replaced_flag = true;
    return 1; // Return value can be modified as needed.
}

our_replaced_func_with_low_prio( str )
{
    // this function will not be called because it has a lower priority than our_replaced_func
}
