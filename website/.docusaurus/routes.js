
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','512'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','3a8'),
  exact: true,
},
{
  path: '/blog/tags/announcements',
  component: ComponentCreator('/blog/tags/announcements','e1a'),
  exact: true,
},
{
  path: '/blog/tags/vale-server',
  component: ComponentCreator('/blog/tags/vale-server','c56'),
  exact: true,
},
{
  path: '/blog/vale-server',
  component: ComponentCreator('/blog/vale-server','274'),
  exact: true,
},
{
  path: '/blog/vale-server.1.3',
  component: ComponentCreator('/blog/vale-server.1.3','3f4'),
  exact: true,
},
{
  path: '/blog/vale-server.1.4',
  component: ComponentCreator('/blog/vale-server.1.4','edd'),
  exact: true,
},
{
  path: '/blog/vsintro',
  component: ComponentCreator('/blog/vsintro','8c7'),
  exact: true,
},
{
  path: '/search',
  component: ComponentCreator('/search','3c1'),
  exact: true,
},
{
  path: '/',
  component: ComponentCreator('/','457'),
  
  routes: [
{
  path: '/common/points',
  component: ComponentCreator('/common/points','72d'),
  exact: true,
},
{
  path: '/vale-server/add-ons/lt',
  component: ComponentCreator('/vale-server/add-ons/lt','609'),
  exact: true,
},
{
  path: '/vale-server/clients/atom',
  component: ComponentCreator('/vale-server/clients/atom','45e'),
  exact: true,
},
{
  path: '/vale-server/clients/chrome',
  component: ComponentCreator('/vale-server/clients/chrome','725'),
  exact: true,
},
{
  path: '/vale-server/clients/gdocs',
  component: ComponentCreator('/vale-server/clients/gdocs','697'),
  exact: true,
},
{
  path: '/vale-server/clients/sublime',
  component: ComponentCreator('/vale-server/clients/sublime','e85'),
  exact: true,
},
{
  path: '/vale-server/clients/vscode',
  component: ComponentCreator('/vale-server/clients/vscode','c57'),
  exact: true,
},
{
  path: '/vale-server/concepts/config',
  component: ComponentCreator('/vale-server/concepts/config','869'),
  exact: true,
},
{
  path: '/vale-server/concepts/scoping',
  component: ComponentCreator('/vale-server/concepts/scoping','883'),
  exact: true,
},
{
  path: '/vale-server/concepts/styles',
  component: ComponentCreator('/vale-server/concepts/styles','353'),
  exact: true,
},
{
  path: '/vale-server/concepts/syncing',
  component: ComponentCreator('/vale-server/concepts/syncing','cf1'),
  exact: true,
},
{
  path: '/vale-server/concepts/vocab',
  component: ComponentCreator('/vale-server/concepts/vocab','2ed'),
  exact: true,
},
{
  path: '/vale-server/gui',
  component: ComponentCreator('/vale-server/gui','74f'),
  exact: true,
},
{
  path: '/vale-server/install',
  component: ComponentCreator('/vale-server/install','50a'),
  exact: true,
},
{
  path: '/vale-server/integrations/gh-action',
  component: ComponentCreator('/vale-server/integrations/gh-action','59f'),
  exact: true,
},
{
  path: '/vale-server/usage',
  component: ComponentCreator('/vale-server/usage','67f'),
  exact: true,
},
{
  path: '/vale/about',
  component: ComponentCreator('/vale/about','681'),
  exact: true,
},
{
  path: '/vale/cli',
  component: ComponentCreator('/vale/cli','334'),
  exact: true,
},
{
  path: '/vale/config',
  component: ComponentCreator('/vale/config','e76'),
  exact: true,
},
{
  path: '/vale/install',
  component: ComponentCreator('/vale/install','c18'),
  exact: true,
},
{
  path: '/vale/scoping',
  component: ComponentCreator('/vale/scoping','79b'),
  exact: true,
},
{
  path: '/vale/styles',
  component: ComponentCreator('/vale/styles','e84'),
  exact: true,
},
{
  path: '/vale/vocab',
  component: ComponentCreator('/vale/vocab','42c'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
