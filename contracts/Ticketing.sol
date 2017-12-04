pragma solidity ^0.4.15;

// Event Strcut:
//    Specify max amount of tix
//    Time
//    Venue


// Ticket Struct:
//     Wallet ID
//     For sale or not

// Mapping:
//     Owners/Participants to tickets

//Ask about bytes32

contract Ticketing {	
  uint numEvents;
  
  struct Event {
    bytes32 eventName; //Name of Event
    uint tixLeft; //How many tickets left
    uint price; //cost per ticket
    bool isActive; //True if event hasn't happened yet
    mapping(uint => address) tickets; //mapping of TicketIds to WalletIDs
  }
  
//   struct Ticket {
//     address walletID;
//     bool forSale; //True if not sold yet
    
//   }
  
  mapping (bytes32 => Event) events;
    
  modifier ticketsLeft(bytes32 _eventID) {
  	require(events[_eventID].tixLeft > 0);
    _;
  }
    
  modifier isActive(bytes32 _eventID) {
  	require(events[_eventID].isActive == true);
    _;
  }
  
  function createEvent(bytes32 _name, uint _maxTickets, uint _ticketPrice) ticketsLeft(_name) isActive(_name) {
    numEvents += 1;
    events[_name] = Event(_name, _maxTickets, _ticketPrice, true);
  }
  
	function verify(uint _ticket, bytes32 _event) isActive(_event) returns (bool success){
    return events[_event].tickets[_ticket] == msg.sender;
  }
    
  function purchaseTix(bytes32 _event) payable isActive(_event) ticketsLeft(_event) returns (uint ticketID){
      if (msg.value < events[_event].price) {
      	revert();
      }
      
      events[_event].tixLeft -= 1;
      events[_event].tickets[events[_event].tixLeft] = msg.sender;
    	return events[_event].tixLeft; // 0 - 499 are valid
  }
  
  
  
}