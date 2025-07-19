getdetour( /*function*/ function_pointer )
{
	/*function*/ function_detour = getdetour( function_pointer );

	if ( !isdefined( function_detour ) )
	{
		assertMsg( "Function is not detoured" );
	}
	return function_detour;
}