getfunctionname( /*function*/ function_pointer )
{
	/*string*/ function_name = getfunctionname( function_pointer );

	if ( !isdefined( function_name ) )
	{
		assertMsg( "This should never happen if <function_pointer> == GSC_VAR_TYPES:function" );
	}
	return function_name;
}