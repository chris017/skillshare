// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ChatSodality {
    struct Message {
        address sender;
        address receiver;
        string content;
    }

    mapping(address => address[]) public friends;
    mapping(address => Message[]) public inbox;
    mapping(address => Message[]) public outbox;

    function addFriend(address _friend) public {
        require(_friend != msg.sender, "You cannot add yourself as a friend.");
        friends[msg.sender].push(_friend);
    }

    function sendMessage(address _receiver, string memory _content) public {
        require(
            _receiver != msg.sender,
            "You cannot send a message to yourself."
        );
        Message memory newMessage = Message({
            sender: msg.sender,
            receiver: _receiver,
            content: _content
        });
        inbox[_receiver].push(newMessage);
        outbox[msg.sender].push(newMessage);
    }

    function getInbox() public view returns (Message[] memory) {
        return inbox[msg.sender];
    }

    function getOutbox() public view returns (Message[] memory) {
        return outbox[msg.sender];
    }

    function getFriends() public view returns (address[] memory) {
        return friends[msg.sender];
    }
}
