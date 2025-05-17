import React, { useState } from "react";
import Title from "../../components/TItle";
import { assets, dashboardDummyData } from "../../assets/assets";

const DashBoard = () => {
  const [dashboardData, setDashboardData] = useState(dashboardDummyData);
  return (
    <div>
      <Title
        aling="left"
        title="Dashboard"
        font="outfit"
        subTitle="Monitor your room listing, track boking and analyze revenur-all in one place. Stay updateed with real-time"
      />
      <div className="flex my-8 gap-4">
        {/* Total Bokings */}
        <div className="bg-primary/3 border rounded-lg border-primary/10 flex p-4 pr-8">
          <img
            src={assets.totalBookingIcon}
            alt="totalBooking"
            className="max-sm:hidden h-10"
          />
          <div className="flex flex-col font-medium sm:ml-4">
            <p className="text-blue-500 text-lg">Total Booking</p>
            <p className="text-neutral-400 text-base">
              {dashboardData.totalBookings}
            </p>
          </div>
        </div>
        {/* Total Revinuw*/}
        <div className="bg-primary/3 border rounded-lg border-primary/10 flex p-4 pr-8">
          <img
            src={assets.totalRevenueIcon}
            alt="totalBooking"
            className="max-sm:hidden h-10"
          />
          <div className="flex flex-col font-medium sm:ml-4">
            <p className="text-blue-500 text-lg">Total Revenue</p>
            <p className="text-neutral-400 text-base">
              ${dashboardData.totalRevenue}
            </p>
          </div>
        </div>
      </div>

      {/* Recent Booking */}
      <h2 className="text-2xl text-blue-950 font-semibold mb-6">
        Recent Bookings
      </h2>

      <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto max-h-96 overflow-y-auto">
          <table className="w-full text-left table-auto min-w-[600px]">
            <thead className="bg-gray-100 sticky top-0 z-10 text-sm text-gray-700">
              <tr>
                <th className="py-4 px-6 font-semibold">👤 User Name</th>
                <th className="py-4 px-6 font-semibold">🛏️ Room Name</th>
                <th className="py-4 px-6 font-semibold text-center">
                  💰 Total Amount
                </th>
                <th className="py-4 px-6 font-semibold text-center">
                  📍 Payment Status
                </th>
              </tr>
            </thead>

            <tbody className="text-gray-800 text-sm divide-y divide-gray-200">
              {dashboardData.bookings.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-blue-50 transition duration-200 ease-in-out"
                >
                  <td className="py-4 px-6">{item.user.username}</td>
                  <td className="py-4 px-6">{item.room.roomType}</td>
                  <td className="py-4 px-6 text-center font-medium">
                    ₹{item.totalPrice}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-full ${
                        item.isPaid
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {item.isPaid ? (
                        <>
                          <i className="ri-check-line"></i> Completed
                        </>
                      ) : (
                        <>
                          <i className="ri-time-line"></i> Pending
                        </>
                      )}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
