import {
    AngularmService, EntityLineComponent, 
    CreateEntityComponent, EditEntityFormComponent,
    FormLineComponent, EditFormLineComponent,
    EntityDetailsComponent, ShowLineComponent,
    ListingTableComponent
} from 'angularm';
import { CustomListingTableComponent } from "app/widgets/customListingTableComponent";
import { CustomEntityLineComponent } from "app/widgets/customEntityLineComponent";

export let defineRules = (angularm: AngularmService) => {
    angularm
        .ptr('form_line', '*', 'code', null, FormLineComponent, { inputType: 'number' })
        .dptr('form_line', FormLineComponent, { inputType: 'text' })
        .dpr('show_line', ShowLineComponent)
        .detr('list_entities', ListingTableComponent , { listtable: 'w3-center' } )
        .etr('list_entities', 'bug', CustomListingTableComponent , { listtable: 'w3-center' })
        .etr('list_entities', 'issue', CustomListingTableComponent , { listtable: 'w3-center' })
        .etr('list_entities', 'product', CustomListingTableComponent, { listtable: 'w3-center' })
        .etr('list_entities', 'project', CustomListingTableComponent, { listtable: 'w3-center' })


        .der('table_line',  EntityLineComponent, { listtd: 'w3-center' })

        .er('table_line', 'bug', CustomEntityLineComponent, { listtd: 'w3-center' })
        .er('table_line', 'issue', CustomEntityLineComponent, { listtd: 'w3-center' })
        .er('table_line', 'product', CustomEntityLineComponent, { listtd: 'w3-center' })
        .er('table_line', 'project', CustomEntityLineComponent, { listtd: 'w3-center' })
    
        .der('show_entity', EntityDetailsComponent)
        .detr('create_form', CreateEntityComponent)
        .der('edit_form', EditEntityFormComponent)
        .pr('edit_form_line', '*', 'code', null, EditFormLineComponent, { inputType: 'number' })
        .dpr('edit_form_line', EditFormLineComponent, { inputType: 'text' });
};
