import {type Project} from '@jakubmazanec/carson';

export function getAppUrl(project: Project, deploymentEnvironment?: string) {
  let appName = (project.config as {deployment?: {appName?: string}}).deployment?.appName;
  let appUrl = (project.config as {deployment?: {appUrl?: string}}).deployment?.appUrl;

  if ((appUrl && deploymentEnvironment === undefined) || (!appName && appUrl)) {
    return appUrl;
  }

  if (!appName) {
    return `http://localhost:5000`;
  }

  return `https://${deploymentEnvironment ? `${appName}-${deploymentEnvironment}` : appName}.fly.dev`;
}
