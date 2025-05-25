// Import Angular Dependencies

import { Injectable } from '@angular/core';

// Import User Agent Parser Dependencies

import { UAParser as UserAgentParser } from '@ua-parser-js/pro-business';
import { IResult as IUserAgentResult } from '@ua-parser-js/pro-business';

// Import Class Dependencies

import { UserAgent } from '@app/domain/primitives/classes/useragent/user.agent.primitive.class';

// Import Interface Dependencies

import { IUserAgent } from '@app/domain/primitives/interfaces/useragent/useragent.primitive.interface';

// The Service Definition

@Injectable({ providedIn: 'root' })
export class UserAgentService
{

  // Public Instance Constructor

  public constructor()
  {
  }

  // Public Instance Methods

  public parse(): IUserAgent
  {
    const userAgentResult: IUserAgentResult = UserAgentParser(window.navigator.userAgent);
    return UserAgent.fromUserAgentParser(userAgentResult);
  }

}
