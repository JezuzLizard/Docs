main()
{
    og_func = replacefunc( maps\_utility::flag, ::flag_override );

    removedetour( og_func );

    // detour is removed, and the original maps\_utility::flag will be called from now on
}

flag_override( str )
{
}