import {ContactsList} from "./contactList";
import {MessagesList} from "./messageList";
import {ProfileCard} from "./profileCard";
import {ActivityFeed} from "./feedActivity";

export function Messages () {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-3rem)]">
          {/* Left Column - Contacts */}
          <div className="lg:col-span-1">
            <ContactsList />
          </div>
          
          {/* Middle Column - Messages */}
          <div className="lg:col-span-1">
            <MessagesList />
          </div>
          
          {/* Right Column - Profile and Activity */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
              <div>
                <ProfileCard />
              </div>
              <div>
                <ActivityFeed />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};