/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import MainViewModel from '../models/main-view-model';

let model = new MainViewModel();

// Event handler for Page "navigatingTo" event attached in main-page.xml
export async function navigatingTo(args: EventData) {

  let page = <Page>args.object;

  page.bindingContext = model;

}