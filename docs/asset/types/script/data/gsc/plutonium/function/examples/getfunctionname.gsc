main()
{
    function_pointer = maps\_utility::flag;
    function_name = getfunctionname( function_pointer );
    assert( function_name == "maps/_utility::flag" );
}