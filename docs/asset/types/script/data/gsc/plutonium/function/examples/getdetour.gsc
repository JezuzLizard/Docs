main()
{
    // detour doesnt exist, will be undefined
    non_existent_detour = getdetour( maps\_utility::flag );
    assert( !isDefined(non_existent_detour) );

    // make a detour
    og_func = replacefunc( maps\_utility::flag, flag_detourd );
    assert( og_func == maps\_utility::flag ); // replacefunc returns the first arg

    // detour exists now, it will return flag_detourd 
    detour_func = getdetour( og_func );
    assert( detour_func == ::flag_detourd );
}

flag_detourd( str )
{
}