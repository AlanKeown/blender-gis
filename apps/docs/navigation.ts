// Site navigation. Sidebar order follows each section's index page; labels follow
// each page's `title` (shortened for decision records).

interface LinkItem {
  title: string;
  to?: string;
  collapsible?: boolean;
  items?: LinkItem[];
}

export const navbar: LinkItem[] = [
  { title: 'Guide', to: '/guide/' },
  { title: 'Setup', to: '/setup/' },
  { title: 'Projects', to: '/projects/' },
  { title: 'Reference', to: '/reference/research-validation/' },
  { title: 'Decisions', to: '/decisions/' }
];

const guide: LinkItem[] = [
  {
    title: 'Guide',
    items: [
      { title: 'Overview', to: '/guide/' },
      { title: 'What can be achieved', to: '/guide/capabilities/' },
      { title: 'Toolchain', to: '/guide/toolchain/' },
      { title: 'Conventions', to: '/guide/conventions/' }
    ]
  }
];

const setup: LinkItem[] = [
  {
    title: 'Setup',
    items: [
      { title: 'Environment overview', to: '/setup/' },
      { title: 'Windows host', to: '/setup/windows/' },
      { title: 'WSL2 + Ubuntu 26.04', to: '/setup/wsl/' },
      { title: 'VS Code', to: '/setup/vscode/' },
      { title: 'Repository', to: '/setup/repository/' },
      { title: 'AI / MCP integration', to: '/setup/ai-mcp/' },
      { title: 'ArcGIS Pro track (optional)', to: '/setup/arcgis-pro/' }
    ]
  }
];

const projects: LinkItem[] = [
  {
    title: 'Projects',
    items: [
      { title: 'Project catalogue', to: '/projects/' },
      { title: '01 Shaded-relief map', to: '/projects/01-shaded-relief/' },
      {
        title: '02 Terrain diorama with cut-away',
        to: '/projects/02-terrain-diorama/'
      },
      {
        title: '03 Terrain analysis shading',
        to: '/projects/03-terrain-analysis-shading/'
      },
      {
        title: '04 3D-printable terrain or catchment tile',
        to: '/projects/04-3d-print-terrain/'
      },
      {
        title: '05 Extruded city from OSM and local footprints',
        to: '/projects/05-osm-city/'
      },
      {
        title: '06 Photoreal context from 3D Tiles',
        to: '/projects/06-photoreal-3d-tiles/'
      },
      {
        title: '07 Sun and shadow study',
        to: '/projects/07-sun-shadow-study/'
      },
      {
        title: '08 Photomontage from geotagged photos',
        to: '/projects/08-photomontage/'
      },
      {
        title: '09 Flood inundation animation',
        to: '/projects/09-flood-inundation/'
      },
      {
        title: '10 Viewshed: analysis vs experience',
        to: '/projects/10-viewshed/'
      },
      {
        title: '11 Rule-based vegetation and rocks',
        to: '/projects/11-procedural-vegetation/'
      },
      { title: '12 3D thematic (prism) maps', to: '/projects/12-prism-map/' },
      { title: '13 Route fly-through', to: '/projects/13-route-flythrough/' },
      {
        title: '14 LiDAR point-cloud visualisation',
        to: '/projects/14-lidar-point-cloud/'
      },
      { title: '15 Change over time', to: '/projects/15-change-over-time/' },
      {
        title: '16 Headless, config-driven batch rendering',
        to: '/projects/16-headless-batch/'
      },
      {
        title: '17 Publishing 3D to the web',
        to: '/projects/17-web-publishing/'
      },
      {
        title: '18 Round-trip: Blender render back into GIS',
        to: '/projects/18-round-trip-raster/'
      },
      {
        title: '19 AI-assisted pipeline via MCP',
        to: '/projects/19-agentic-pipeline/'
      },
      {
        title: '20 ArcGIS Pro preparation track',
        to: '/projects/20-arcgis-pro-track/'
      }
    ]
  }
];

const reference: LinkItem[] = [
  {
    title: 'Reference',
    items: [
      { title: 'Research validation', to: '/reference/research-validation/' },
      { title: 'Data sources', to: '/reference/data-sources/' },
      { title: 'Sources', to: '/reference/sources/' }
    ]
  }
];

const decisions: LinkItem[] = [
  {
    title: 'Decision records',
    items: [
      { title: 'Index', to: '/decisions/' },
      {
        title: '0001 Primary workstation',
        to: '/decisions/0001-primary-workstation-windows-wsl2/'
      },
      {
        title: '0002 Platform support for readers',
        to: '/decisions/0002-reader-platform-support/'
      },
      {
        title: '0003 Additional compute and hosted services',
        to: '/decisions/0003-additional-compute-and-hosted-services/'
      },
      { title: '0004 Editor and IDE', to: '/decisions/0004-editor-and-ide/' },
      {
        title: '0005 Repository layout',
        to: '/decisions/0005-repository-layout/'
      },
      { title: '0006 Web tooling', to: '/decisions/0006-web-tooling-basics/' },
      {
        title: '0007 Web project conventions',
        to: '/decisions/0007-web-project-conventions/'
      },
      {
        title: '0008 Design system',
        to: '/decisions/0008-design-system-consumption/'
      },
      {
        title: '0009 Deployment',
        to: '/decisions/0009-deployment-github-actions-wrangler/'
      }
    ]
  }
];

export const sidebar: Record<string, LinkItem[]> = {
  '/guide/': guide,
  '/setup/': setup,
  '/projects/': projects,
  '/reference/': reference,
  '/decisions/': decisions
};
