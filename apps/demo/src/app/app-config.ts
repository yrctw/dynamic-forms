import { InjectionToken } from '@angular/core';

export interface AppProject {
  url: string;
}

export interface AppRepository {
  url: string;
  branch: string;
  libraryQuery: string;
}

export interface AppVersion {
  name: string;
  url: string;
}

export interface AppConfig {
  version: string;
  build: string;
  project: AppProject;
  repository: AppRepository;
  versions: AppVersion[];
}

export const APP_CONFIG = new InjectionToken<AppConfig>('AppConfig');
