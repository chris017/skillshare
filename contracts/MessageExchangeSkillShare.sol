// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MessageExchangeSkillShare {
    struct Message {
        address sender;
        string message;
    }

    mapping(address => Message[]) private messages;

    event MessageSent(
        address indexed sender,
        address indexed receiver,
        string message
    );

    function sendMessage(address receiver, string memory message) public {
        require(msg.sender != receiver, "Cannot send message to yourself.");
        messages[receiver].push(Message(msg.sender, message));
        emit MessageSent(msg.sender, receiver, message);
    }

    function getMessagesForAddress(
        address addr
    ) public view returns (Message[] memory) {
        return messages[addr];
    }
}
