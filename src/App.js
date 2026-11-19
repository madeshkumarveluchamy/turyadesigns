import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Turyaproduct from './Components/Turya/Turyaproduct';
import Detailproduct from './Components/Turya/Detailproduct';
import Turya from './Components/Turya/Turya';

import Mirrordetail1 from './Components/Turya/Turya-categorypages/Detailed-turya/Mirrorsdetail/Mirrordetail1/Mirrordetail1';
import Mirrordetail2 from './Components/Turya/Turya-categorypages/Detailed-turya/Mirrorsdetail/Mirrordetail2/Mirrordetail2';
import Mirrordetail3 from './Components/Turya/Turya-categorypages/Detailed-turya/Mirrorsdetail/Mirrordetail3/Mirrordetail3';
import Mirrordetail4 from './Components/Turya/Turya-categorypages/Detailed-turya/Mirrorsdetail/MirrorDetail4/Mirrordetail4';
import Mirrordetail5 from './Components/Turya/Turya-categorypages/Detailed-turya/Mirrorsdetail/Mirrordetail5/Mirrordetail5';
import Mirrordetail6 from './Components/Turya/Turya-categorypages/Detailed-turya/Mirrorsdetail/Mirrordetail6/Mirrordetail6';
import Mirrordetail8 from './Components/Turya/Turya-categorypages/Detailed-turya/Mirrorsdetail/Mirrordetail8/Mirrordetail8';
import Mirrordetail7 from './Components/Turya/Turya-categorypages/Detailed-turya/Mirrorsdetail/Mirrordetail7/Mirrordetail7';
import Mirrordetail9 from './Components/Turya/Turya-categorypages/Detailed-turya/Mirrorsdetail/Mirrordetail9/Mirrordetail9';
import Mirrordetail10 from './Components/Turya/Turya-categorypages/Detailed-turya/Mirrorsdetail/Mirrordetail10/Mirrordetail10';
import Mirrordetail11 from './Components/Turya/Turya-categorypages/Detailed-turya/Mirrorsdetail/Mirrordetail11/Mirrordetail11';
import Mirrordetail12 from './Components/Turya/Turya-categorypages/Detailed-turya/Mirrorsdetail/Mirrordetail12/Mirrordetail12';
import Mirrordetail13 from './Components/Turya/Turya-categorypages/Detailed-turya/Mirrorsdetail/Mirrordetail13/Mirrordetail13';
import Mirrordetail14 from './Components/Turya/Turya-categorypages/Detailed-turya/Mirrorsdetail/Mirrordetail14/Mirrordetail14';
import Mirrordetail15 from './Components/Turya/Turya-categorypages/Detailed-turya/Mirrorsdetail/Mirrordetail15/Mirrordetial15';
import Drawer1 from './Components/Turya/Turya-categorypages/Detailed-turya/Chestofdrawers/Drawer1/Drawer1';
import Drawer2 from './Components/Turya/Turya-categorypages/Detailed-turya/Chestofdrawers/Drawer2/Drawer2';
import Drawer3 from './Components/Turya/Turya-categorypages/Detailed-turya/Chestofdrawers/Drawer3/Drawer3';
import Drawer4 from './Components/Turya/Turya-categorypages/Detailed-turya/Chestofdrawers/Drawer4/Drawer4';
import Drawer5 from './Components/Turya/Turya-categorypages/Detailed-turya/Chestofdrawers/Drawer5/Drawer5';
import Drawer6 from './Components/Turya/Turya-categorypages/Detailed-turya/Chestofdrawers/Drawer6/Drawer6';
import Drawer7 from './Components/Turya/Turya-categorypages/Detailed-turya/Chestofdrawers/Drawer7/Drawer7';
import Drawer8 from './Components/Turya/Turya-categorypages/Detailed-turya/Chestofdrawers/Drawer8/Drawer8';
import Drawer9 from './Components/Turya/Turya-categorypages/Detailed-turya/Chestofdrawers/Drawer9/Drawer9';
import Drawer10 from './Components/Turya/Turya-categorypages/Detailed-turya/Chestofdrawers/Drawer10/Drawer10';
import Drawer11 from './Components/Turya/Turya-categorypages/Detailed-turya/Chestofdrawers/Drawer11/Drawer11';
import { Mirrors } from './Components/Turya/Turya-categorypages/Mirrors/Mirrors';
import { Drawers } from './Components/Turya/Turya-categorypages/Drawers/Drawers';
import Accessories1 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories1/Accessories1';
import Accessories2 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories2/Accessories2';
import Accessories3 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories3/Accessories3';
import Accessories4 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories4/Accessories4';
import Accessories5 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories5/Accessories5';
import Accessories6 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories6/Accessories6';
import Accessories7 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories7/Accessories7';
import Accessories8 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories8/Accessories8';
import Accessories9 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories9/Accessories9';
import Accessories10 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories10/Accessories10';
import Accessories11 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories11/Accessories11';
import Accessories12 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories12/Accessories12';
import Accessories13 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories13/Accessories13';
import Accessories14 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories14/Accessories14';
import Accessories15 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories15/Accessories15';
import Accessories16 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories16/Accessories16';
import Accessories17 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories17/Accessories17';
import Accessories18 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories18/Accessories18';
import Accessories19 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories19/Accessories19';
import Accessories20 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories20/Accessories20';
import Accessories21 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories21/Accessories21';
import Accessories22 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories22/Accessories22';
import Accessories23 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories23/Accessories23';
import Accessories24 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories24/Accessories24';
import Accessories25 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories25/Accessories25';
import Accessories26 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories26/Accessories26';
import Accessories27 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories27/Accessories27';
import Accessories28 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories28/Accessories28';
import Accessories29 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories29/Accessories29';
import Accessories30 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories30/Accessories30';
import Accessories31 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories31/Accessories31';
import Accessories32 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories32/Accessories32';
import Accessories33 from './Components/Turya/Turya-categorypages/Detailed-turya/AccessoriesDetail/Accessories33/Accessories33';
import { Accessories } from './Components/Turya/Turya-categorypages/Accessories/Accessories';
import Clock1 from './Components/Turya/Turya-categorypages/Detailed-turya/Clocks/Clock1/Clock1';
import Clock2 from './Components/Turya/Turya-categorypages/Detailed-turya/Clocks/Clock2/Clock2';
import Clock3 from './Components/Turya/Turya-categorypages/Detailed-turya/Clocks/Clock3/Clock3';
import Clock4 from './Components/Turya/Turya-categorypages/Detailed-turya/Clocks/Clock4/Clock4';
import Bedroom1 from './Components/Turya/Turya-categorypages/Detailed-turya/Bedroomdetail/Bedoom1/Bedroom1';
import Bedroom2 from './Components/Turya/Turya-categorypages/Detailed-turya/Bedroomdetail/Bedoom2/Bedroom2';
import Bedroom3 from './Components/Turya/Turya-categorypages/Detailed-turya/Bedroomdetail/Bedoom3/Bedroom3';
import Bedroom4 from './Components/Turya/Turya-categorypages/Detailed-turya/Bedroomdetail/Bedoom4/Bedrooms4';
import Bedroom5 from './Components/Turya/Turya-categorypages/Detailed-turya/Bedroomdetail/Bedoom5/Bedroom5';
import Bedroom6 from './Components/Turya/Turya-categorypages/Detailed-turya/Bedroomdetail/Bedoom6/Bedroom6';
import Bedroom7 from './Components/Turya/Turya-categorypages/Detailed-turya/Bedroomdetail/Bedoom7/Bedroom7';
import Bedroom8 from './Components/Turya/Turya-categorypages/Detailed-turya/Bedroomdetail/Bedoom8/Bedroom8';
import Bedroom9 from './Components/Turya/Turya-categorypages/Detailed-turya/Bedroomdetail/Bedoom9/Bedroom9';
import Bedroom10 from './Components/Turya/Turya-categorypages/Detailed-turya/Bedroomdetail/Bedoom10/Bedroom10';
import Bedroom11 from './Components/Turya/Turya-categorypages/Detailed-turya/Bedroomdetail/Bedoom11/Bedroom11';
import Bedroom12 from './Components/Turya/Turya-categorypages/Detailed-turya/Bedroomdetail/Bedoom12/Bedroom12';
import Bedroom13 from './Components/Turya/Turya-categorypages/Detailed-turya/Bedroomdetail/Bedoom13/Bedroom13';
import Kitchen1 from './Components/Turya/Turya-categorypages/Detailed-turya/Kitchens/Kitchen1/Kitchen1';
import Diningtable2 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Diningtable2/Diningtable2';
import Diningtable1 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Diningtable1/Diningtable1';
import Diningtable3 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Diningtable3/Diningtable3';
import Diningtable4 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Diningtable4/Diningtable4';
import Diningtable5 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Diningtable5/Diningtable5';
import Diningtable6 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Diningtable6/Diningtable6';
import Sidetable1 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Sidetable1/Sidetable1';
import Sidetable2 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Sidetable2/Sidetable2';
import Sidetable3 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Sidetable3/Sidetable3';
import Sidetable4 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Sidetable4/Sidetable4';
import Sidetable5 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Sidetable5/Sidetable5';
import Sidetable6 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Sidetable6/Sidetable6';
import Sidetable7 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Sidetable7/Sidetable7';
import Table1 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Table1/Table1';
import Table2 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Table2/Table2';
import Table3 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Table3/Table3';
import Table4 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Table4/Table4';
import Table5 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Table5/Table5';
import Table6 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Table6/Table6';
import Table7 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Table7/Table7';
import Table8 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Table8/Table8';
import Table9 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Table9/Table9';
import Table10 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Table10/Table10';
import Table11 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Table11/Table11';
import Table12 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Table12/Table12';
import Table13 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Table13/Table13';
import Table14 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Table14/Table14';
import Teapoy1 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Teapoy1/Teapoy1';
import Teapoy2 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Teapoy2/Teapoy2';
import Teapoy3 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Teapoy3/Teapoy3';
import Teapoy4 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Teapoy4/Teapoy4';
import Teapoy5 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Teapoy5/Teapoy5';
import Teapoy6 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Teapoy6/Teapoy6';
import Teapoy7 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Teapoy7/Teapoy7';
import Teapoy8 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Teapoy8/Teapoy8';
import Teapoy9 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Teapoy9/Teapoy9';
import Teapoy10 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Teapoy10/Teapoy10';
import Teapoy11 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Teapoy11/Teapoy11';
import Teapoy12 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Teapoy12/Teapoy12';
import Teapoy13 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Teapoy13/Teapoy13';
import Teapoy14 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Teapoy14/Teapoy14';
import Teapoy15 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Teapoy15/Teapoy15';
import Teapoy16 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Teapoy16/Teapoy16';
import Teapoy17 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Teapoy17/Teapoy17';
import Teapoy18 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Teapoy18/Teapoy18';
import Teapoy19 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Teapoy19/Teapoy19';
import Teapoy20 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Teapoy20/Teapoy20';
import Teapoy21 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Teapoy21/Teapoy21';
import Teapoy22 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Teapoy22/Teapoy22';
import Teapoy23 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Teapoy23/Teapoy23';
import Teapoy24 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Teapoy24/Teapoy24';
import Teapoy25 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Teapoy25/Teapoy25';
import Teapoy26 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Teapoy26/Teapoy26';
import Teapoy27 from './Components/Turya/Turya-categorypages/Detailed-turya/Tablesdetail/Teapoy27/Teapoy27';
import Chair1 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Chair1/Chair1';
import Chair2 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Chair2/Chair2';
import Chair3 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Chair3/Chair3';
import Chair4 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Chair4/Chair4';
import Chair5 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Chair5/Chair5';
import Chair6 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Chair6/Chair6';
import Chair7 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Chair7/Chair7';
import Chair8 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Chair8/Chair8';
import Chair9 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Chair9/Chair9';
import Chair10 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Chair10/Chair10';
import Chair11 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Chair11/Chair11';
import Chair12 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Chair12/Chair12';
import Chair13 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Chair13/Chair13';
import Chair14 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Chair14/Chair14';
import Chair15 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Chair15/Chair15';
import Chair16 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Chair16/Chair16';
import Chair17 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Chair17/Chair17';
import Chair18 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Chair18/Chair18';
import Chair19 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Chair19/Chair19';
import Chair20 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Chair20/Chair20';
import Chair21 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Chair21/Chair21';
import Chair22 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Chair22/Chair22';
import Chair23 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Chair23/Chair23';
import Chair24 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Chair24/Chair24';
import Chair25 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Chair25/Chair25';
import Chair26 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Chair26/Chair26';
import Sofas1 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Sofas1/Sofas1';
import Sofas2 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Sofas2/Sofas2';
import Sofas3 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Sofas3/Sofas3';
import Sofas4 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Sofas4/Sofas4';
import Sofas5 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Sofas5/Sofas5';
import Sofas6 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Sofas6/Sofas6';
import Sofas7 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Sofas7/Sofas7';
import Sofas8 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Sofas8/Sofas8';
import Sofas9 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Sofas9/Sofas9';
import Sofas10 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Sofas10/Sofas10';
import Sofas11 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Sofas11/Sofas11';
import Sofas12 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Sofas12/Sofas12';
import Swings1 from './Components/Turya/Turya-categorypages/Detailed-turya/SeatingDetail/Swings1/Swings1';
import Doors1 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors1/Doors1';
import Doors2 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors2/Doors2';
import Doors3 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors3/Doors3';
import Doors4 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors4/Doors4';
import Doors5 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors5/Doors5';
import Doors6 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors6/Doors6';
import Doors7 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors7/Doors7';
import Doors8 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors8/Doors8';
import Doors9 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors9/Doors9';
import Doors10 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors10/Doors10';
import { Bedrooms } from './Components/Turya/Turya-categorypages/Bedroom/Bedrooms';
import { Clocks } from './Components/Turya/Turya-categorypages/Clocks/Clocks';
import { Tables } from './Components/Turya/Turya-categorypages/Tables/Tables';
import Doors11 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors11/Doors11';
import Doors12 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors12/Doors12';
import Doors13 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors13/Doors13';
import Doors14 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors14/Doors14';
import Doors15 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors15/Doors15';
import Doors16 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors16/Doors16';
import Doors17 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors17/Doors17';
import Doors18 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors18/Doors18';
import Doors19 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors19/Doors19';
import Doors20 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors20/Doors20';
import Doors21 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors21/Doors21';
import Doors22 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors22/Doors22';
import Doors23 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors23/Doors23';
import Doors24 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors24/Doors24';
import Doors25 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors25/Doors25';
import Doors26 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors26/Doors26';
import Doors27 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors27/Doors27';
import Doors28 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors28/Doors28';
import Doors29 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors29/Doors29';
import Doors30 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors30/Doors30';
import Doors31 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors31/Doors31';
import Doors32 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors32/Doors32';
import Doors33 from './Components/Turya/Turya-categorypages/Detailed-turya/Doorsandgates/Doors33/Doors33';
import { Kitchen } from './Components/Turya/Turya-categorypages/Kitchen/Kitchen';
import { Doors } from './Components/Turya/Turya-categorypages/Doors/Doors';
import { Seating } from './Components/Turya/Turya-categorypages/Seating/Seating';







const App = () => {
 

  return (

    <Router>
     
      <Routes>
      

        <Route path="/" element={<Turya />} /> 
     
        <Route path="/Turyaproduct" element={<Turyaproduct />} /> 
        <Route path="/Detailproduct" element={<Detailproduct />} /> 
     

        <Route path="/Mirrors" element={<Mirrors />} />
        <Route path="/Drawers" element={<Drawers />} />
        <Route path="/Accessories" element={<Accessories />} />
        <Route path="/Bedrooms" element={<Bedrooms />} />
        <Route path="/Clocks" element={<Clocks />} />
        <Route path="/Tables" element={<Tables />} />
        <Route path="/Kitchen" element={<Kitchen />} />
        <Route path="/Doors" element={<Doors />} />
        <Route path="/Seating" element={<Seating />} />




        <Route path="/Mirrordetail1" element={<Mirrordetail1 />} />
        <Route path="/Mirrordetail2" element={<Mirrordetail2 />} />
        <Route path="/Mirrordetail3" element={<Mirrordetail3 />} />
        <Route path="/Mirrordetail4" element={<Mirrordetail4 />} />
        <Route path="/Mirrordetail5" element={<Mirrordetail5 />} />
        <Route path="/Mirrordetail6" element={<Mirrordetail6 />} />
        <Route path="/Mirrordetail7" element={<Mirrordetail7 />} />
        <Route path="/Mirrordetail8" element={<Mirrordetail8 />} />
        <Route path="/Mirrordetail9" element={<Mirrordetail9 />} />
        <Route path="/Mirrordetail10" element={<Mirrordetail10 />} />
        <Route path="/Mirrordetail11" element={<Mirrordetail11 />} />
        <Route path="/Mirrordetail12" element={<Mirrordetail12 />} />
        <Route path="/Mirrordetail13" element={<Mirrordetail13 />} />
        <Route path="/Mirrordetail14" element={<Mirrordetail14 />} />
        <Route path="/Mirrordetail15" element={<Mirrordetail15 />} />




        <Route path="/Drawer1" element={<Drawer1 />} />
        <Route path="/Drawer2" element={<Drawer2 />} />
        <Route path="/Drawer3" element={<Drawer3 />} />
        <Route path="/Drawer4" element={<Drawer4 />} />
        <Route path="/Drawer5" element={<Drawer5 />} />
        <Route path="/Drawer6" element={<Drawer6 />} />
        <Route path="/Drawer7" element={<Drawer7 />} />
        <Route path="/Drawer8" element={<Drawer8 />} />
        <Route path="/Drawer9" element={<Drawer9 />} />
        <Route path="/Drawer10" element={<Drawer10 />} />
        <Route path="/Drawer11" element={<Drawer11 />} />


        <Route path="/Accessories1" element={<Accessories1 />} />
        <Route path="/Accessories2" element={<Accessories2 />} />
        <Route path="/Accessories3" element={<Accessories3 />} />
        <Route path="/Accessories4" element={<Accessories4 />} />
        <Route path="/Accessories5" element={<Accessories5 />} />
        <Route path="/Accessories6" element={<Accessories6 />} />
        <Route path="/Accessories7" element={<Accessories7 />} />
        <Route path="/Accessories8" element={<Accessories8 />} />
        <Route path="/Accessories9" element={<Accessories9 />} />
        <Route path="/Accessories10" element={<Accessories10 />} />
        <Route path="/Accessories11" element={<Accessories11 />} />
        <Route path="/Accessories12" element={<Accessories12 />} />
        <Route path="/Accessories13" element={<Accessories13 />} />
        <Route path="/Accessories14" element={<Accessories14 />} />
        <Route path="/Accessories15" element={<Accessories15 />} />
        <Route path="/Accessories16" element={<Accessories16 />} />
        <Route path="/Accessories17" element={<Accessories17 />} />
        <Route path="/Accessories18" element={<Accessories18 />} />
        <Route path="/Accessories19" element={<Accessories19 />} />
        <Route path="/Accessories20" element={<Accessories20 />} />
        <Route path="/Accessories21" element={<Accessories21 />} />
        <Route path="/Accessories22" element={<Accessories22 />} />
        <Route path="/Accessories23" element={<Accessories23 />} />
        <Route path="/Accessories24" element={<Accessories24 />} />
        <Route path="/Accessories25" element={<Accessories25 />} />
        <Route path="/Accessories26" element={<Accessories26 />} />
        <Route path="/Accessories27" element={<Accessories27 />} />
        <Route path="/Accessories28" element={<Accessories28 />} />
        <Route path="/Accessories29" element={<Accessories29 />} />
        <Route path="/Accessories30" element={<Accessories30 />} />
        <Route path="/Accessories31" element={<Accessories31 />} />
        <Route path="/Accessories32" element={<Accessories32 />} />
        <Route path="/Accessories33" element={<Accessories33 />} />
        
        <Route path="/Clock1" element={<Clock1 />} />
        <Route path="/Clock2" element={<Clock2 />} />
        <Route path="/Clock3" element={<Clock3 />} />
        <Route path="/Clock4" element={<Clock4 />} />


        <Route path="/Bedroom1" element={<Bedroom1 />} />
        <Route path="/Bedroom2" element={<Bedroom2 />} />
        <Route path="/Bedroom3" element={<Bedroom3 />} />
        <Route path="/Bedroom4" element={<Bedroom4 />} />
        <Route path="/Bedroom5" element={<Bedroom5 />} />
        <Route path="/Bedroom6" element={<Bedroom6 />} />
        <Route path="/Bedroom7" element={<Bedroom7 />} />
        <Route path="/Bedroom8" element={<Bedroom8 />} />
        <Route path="/Bedroom9" element={<Bedroom9 />} />
        <Route path="/Bedroom10" element={<Bedroom10 />} />
        <Route path="/Bedroom11" element={<Bedroom11 />} />
        <Route path="/Bedroom12" element={<Bedroom12 />} />
        <Route path="/Bedroom13" element={<Bedroom13 />} />

        <Route path="/Kitchen1" element={<Kitchen1 />} />


        <Route path="/Table1" element={<Diningtable1 />} />
        <Route path="/Table2" element={<Diningtable2 />} />
        <Route path="/Table3" element={<Diningtable3 />} />
        <Route path="/Table4" element={<Diningtable4 />} />
        <Route path="/Table5" element={<Diningtable5 />} />
        <Route path="/Table6" element={<Diningtable6 />} />
        <Route path="/Table7" element={<Sidetable1 />} />
        <Route path="/Table8" element={<Sidetable2 />} />
        <Route path="/Table9" element={<Sidetable3 />} />
        <Route path="/Table10" element={<Sidetable4 />} />
        <Route path="/Table11" element={<Sidetable5 />} />
        <Route path="/Table12" element={<Sidetable6 />} />
        <Route path="/Table13" element={<Sidetable7 />} />
        <Route path="/Table14" element={<Table1 />} />
        <Route path="/Table15" element={<Table2 />} />
        <Route path="/Table16" element={<Table3 />} />
        <Route path="/Table17" element={<Table4 />} />
        <Route path="/Table18" element={<Table5 />} />
        <Route path="/Table19" element={<Table6 />} />
        <Route path="/Table20" element={<Table7 />} />
        <Route path="/Table21" element={<Table8 />} />
        <Route path="/Table22" element={<Table9 />} />
        <Route path="/Table23" element={<Table10 />} />
        <Route path="/Table24" element={<Table11 />} />
        <Route path="/Table25" element={<Table12 />} />
        <Route path="/Table26" element={<Table13 />} />
        <Route path="/Table27" element={<Table14 />} />
        <Route path="/Table28" element={<Teapoy1 />} />
        <Route path="/Table29" element={<Teapoy2 />} />
        <Route path="/Table30" element={<Teapoy3 />} />
        <Route path="/Table31" element={<Teapoy4 />} />
        <Route path="/Table32" element={<Teapoy5 />} />
        <Route path="/Table33" element={<Teapoy6 />} />
        <Route path="/Table34" element={<Teapoy7 />} />
        <Route path="/Table35" element={<Teapoy8 />} />
        <Route path="/Table36" element={<Teapoy9 />} />
        <Route path="/Table37" element={<Teapoy10 />} />
        <Route path="/Table38" element={<Teapoy11 />} />
        <Route path="/Table39" element={<Teapoy12 />} />
        <Route path="/Table40" element={<Teapoy13 />} />
        <Route path="/Table41" element={<Teapoy14 />} />
        <Route path="/Table42" element={<Teapoy15 />} />
        <Route path="/Table43" element={<Teapoy16 />} />
        <Route path="/Table44" element={<Teapoy17 />} />
        <Route path="/Table45" element={<Teapoy18 />} />
        <Route path="/Table46" element={<Teapoy19 />} />
        <Route path="/Table47" element={<Teapoy20 />} />
        <Route path="/Table48" element={<Teapoy21 />} />
        <Route path="/Table49" element={<Teapoy22 />} />
        <Route path="/Table50" element={<Teapoy23 />} />
        <Route path="/Table51" element={<Teapoy24 />} />
        <Route path="/Table52" element={<Teapoy25 />} />
        <Route path="/Table53" element={<Teapoy26 />} />
        <Route path="/Table54" element={<Teapoy27 />} />


        <Route path='/Chair1' element={< Chair1 />}/>
        <Route path='/Chair2' element={< Chair2 />}/>
        <Route path='/Chair3' element={< Chair3 />}/>
        <Route path='/Chair4' element={< Chair4 />}/>
        <Route path='/Chair5' element={< Chair5 />}/>
        <Route path='/Chair6' element={< Chair6 />}/>
        <Route path='/Chair7' element={< Chair7 />}/>
        <Route path='/Chair8' element={< Chair8 />}/>
        <Route path='/Chair9' element={< Chair9 />}/>
        <Route path='/Chair10' element={< Chair10 />}/>
        <Route path='/Chair11' element={< Chair11 />}/>
        <Route path='/Chair12' element={< Chair12 />}/>
        <Route path='/Chair13' element={< Chair13 />}/>
        <Route path='/Chair14' element={< Chair14 />}/>
        <Route path='/Chair15' element={< Chair15 />}/>
        <Route path='/Chair16' element={< Chair16 />}/>
        <Route path='/Chair17' element={< Chair17 />}/>
        <Route path='/Chair18' element={< Chair18 />}/>
        <Route path='/Chair19' element={< Chair19 />}/>
        <Route path='/Chair20' element={< Chair20 />}/>
        <Route path='/Chair21' element={< Chair21 />}/>
        <Route path='/Chair22' element={< Chair22 />}/>
        <Route path='/Chair23' element={< Chair23 />}/>
        <Route path='/Chair24' element={< Chair24 />}/>
        <Route path='/Chair25' element={< Chair25 />}/>
        <Route path='/Chair26' element={< Chair26 />}/>
        <Route path='/Sofas1' element={< Sofas1 />}/>
        <Route path='/Sofas2' element={< Sofas2 />}/>
        <Route path='/Sofas3' element={< Sofas3 />}/>
        <Route path='/Sofas4' element={< Sofas4 />}/>
        <Route path='/Sofas5' element={< Sofas5 />}/>
        <Route path='/Sofas6' element={< Sofas6 />}/>
        <Route path='/Sofas7' element={< Sofas7 />}/>
        <Route path='/Sofas8' element={< Sofas8 />}/>
        <Route path='/Sofas9' element={< Sofas9 />}/>
        <Route path='/Sofas10' element={< Sofas10 />}/>
        <Route path='/Sofas11' element={< Sofas11 />}/>
        <Route path='/Sofas12' element={< Sofas12 />}/>
        <Route path='/Swings1' element={< Swings1 />}/>


        <Route path='/Doors1' element={< Doors1 />}/>
        <Route path='/Doors2' element={< Doors2 />}/>
        <Route path='/Doors3' element={< Doors3 />}/>
        <Route path='/Doors4' element={< Doors4 />}/>
        <Route path='/Doors5' element={< Doors5 />}/>
        <Route path='/Doors6' element={< Doors6 />}/>
        <Route path='/Doors7' element={< Doors7 />}/>
        <Route path='/Doors8' element={< Doors8 />}/>
        <Route path='/Doors9' element={< Doors9 />}/>
        <Route path='/Doors10' element={< Doors10 />}/>
        <Route path='/Doors11' element={< Doors11 />}/>
        <Route path='/Doors12' element={< Doors12 />}/>
        <Route path='/Doors13' element={< Doors13 />}/>
        <Route path='/Doors14' element={< Doors14 />}/>
        <Route path='/Doors15' element={< Doors15 />}/>
        <Route path='/Doors16' element={< Doors16 />}/>
        <Route path='/Doors17' element={< Doors17 />}/>
        <Route path='/Doors18' element={< Doors18 />}/>
        <Route path='/Doors19' element={< Doors19 />}/>
        <Route path='/Doors20' element={< Doors20 />}/>
        <Route path='/Doors21' element={< Doors21 />}/>
        <Route path='/Doors22' element={< Doors22 />}/>
        <Route path='/Doors23' element={< Doors23 />}/>
        <Route path='/Doors24' element={< Doors24 />}/>
        <Route path='/Doors25' element={< Doors25 />}/>
        <Route path='/Doors26' element={< Doors26 />}/>
        <Route path='/Doors27' element={< Doors27 />}/>
        <Route path='/Doors28' element={< Doors28 />}/>
        <Route path='/Doors29' element={< Doors29 />}/>
        <Route path='/Doors30' element={< Doors30 />}/>
        <Route path='/Doors31' element={< Doors31 />}/>
        <Route path='/Doors32' element={< Doors32 />}/>
        <Route path='/Doors33' element={< Doors33 />}/>
       {/* <Route path="/" element={<Turyanew/>} /> */}

      

      </Routes>

    </Router>

  
  );
};

export default App;

