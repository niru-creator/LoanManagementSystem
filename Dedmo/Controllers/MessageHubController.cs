using LoanManagementSystem.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace LoanManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessageHubController : ControllerBase
    {
        private IHubContext<MessageHub, IMessageHubClient> messageHub;

        public MessageHubController(IHubContext<MessageHub, IMessageHubClient> _messageHub)
        {
            messageHub = _messageHub;
        }

        [HttpGet]
        [Route("Notification")]
        public string GetNotification()
        {
            return "Hello";
        }
    }
}
