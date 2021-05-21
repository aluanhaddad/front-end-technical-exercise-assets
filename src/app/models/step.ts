import VersionContent from './version-content';

export default interface Step {
  id: string;
  stepNumber: string;
  versionContent: VersionContent[];
}
