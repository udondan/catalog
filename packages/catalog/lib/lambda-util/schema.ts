export const enum PackageTableAttributes {
  NAME = 'name',
  VERSION = 'version',
  METADATA = 'metadata',
  URL = 'url',
  TWEETID = 'tweetid',
  JSON = 'json'
}

export interface Package {
  name: string;
  version: string;
  metadata: PackageMetadata;
  json?: any; // contents of package.json (only available after rendering)
  url?: string;
  tweetid?: string;
}

export interface PackageMetadata {
  name: string;
  scope: string;
  version: string;
  description: string;
  keywords?: string[];
  links: {
    npm: string;
    homepage: string;
    repository: string;
    bugs: string;
  };
  author: {
    name: string;
    url: string;
    twitter?: string;
  };
}
