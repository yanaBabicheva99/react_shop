import * as commonCommands from './common';
import * as profileCommands from './profile';
import * as articleCommands from './article';

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articleCommands);
