GSC docs design:
Basically there will be single files that have all the data on the GSC VM, instead of per game.
This is because cod games share a lot of functionality between the GSC VM's so to avoid unnecessary duplication for maintenance, the viewable docs will be generated based on the single defs, and placed in the generated_docs folder to actually be displayed.
This will be done by parsing the json for fields to know which fields exist in what game or not, and for pseudocode for builtins gsc-tool's macro parsing functionality can be used to clarify the differences between the games. The doc generation only needs to happen when making a release or testing locally, so I suppose it would need to be added as a dependency likely as binary.

The reason why pseudocode for GSC builtins is desireable is it allows very clear demonstrations on what the builtin's branches are in GSC form.
In this case code is worth a thousand words, as picturing what a builtin should do based on its description, and seeing code that is stated to match the description are not the same.

The json file defs for builtins replace what the /@ @/ docs functionality the mod tools used.
