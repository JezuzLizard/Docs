

/@
	pluto-functions:getfunction
@/
getfunction( path, func_name )
{
	result = getfunction( path, func_name );

	if ( !isdefined( result ) )
	{
		assertMsg( "Couldn't find function <func_name> in <path>" );
	}
	return result;
}