﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LoanManagementSystem.Services
{
    public interface IMessageHubClient
    {
        Task SendOffersToUser(List<string> message);
    }
}
