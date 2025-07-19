replacefunc( /*function*/ from_function, /*function*/ to_function, /*int*/ priority )
{
	original_function = undefined;
	if ( isdefined( priority ) )
	{
		/*function*/ original_function = replacefunc( from_function, to_function, priority );
	}
	else
	{
		/*function*/ original_function = replacefunc( from_function, to_function );
	}

	// A warning is printed after execution of replacefunc should <from_function> already have one or more detours applied.
	// Additional warnings for whether a new detour has a lower or higher priority.

	if ( !isdefined( original_function ) )
	{
		assertMsg( "Priority of <to_function> is lower than a prior applied detour; use \"listscriptdetours\" to view currently applied detours" );
	}
	return original_function;
}