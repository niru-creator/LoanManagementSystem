using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LoanManagementSystem.Services
{
    public class NotificationService
    {
        private IHubContext<MessageHub, IMessageHubClient> messageHub;
        public NotificationService(IHubContext<MessageHub, IMessageHubClient> _messageHub)
        {
            messageHub = _messageHub;
        }

        public string GetNotification()
        {
            return "Hello";
        }
    }
}
