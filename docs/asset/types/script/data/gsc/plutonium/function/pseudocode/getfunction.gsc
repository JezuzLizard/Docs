getfunction( /*string*/ function_path, /*string*/ function_name )
{
	/*function*/ function_for_name = getfunction( function_path, function_name );

	if ( !isdefined( function_for_name ) )
	{
		assertMsg( "Failed to find function from <function_name> and <function_path>" );
	}
	return function_for_name;
}