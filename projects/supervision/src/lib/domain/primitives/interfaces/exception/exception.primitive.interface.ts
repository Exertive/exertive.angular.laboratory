
export interface IException extends Error
{

  summary: string;

  explanation?: string | null;

}
