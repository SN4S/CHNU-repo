namespace state;

using System;

public interface IAppointmentState
{
    void ConfirmAppointment();
    void CancelAppointment();
}

public class ScheduledState : IAppointmentState
{
    public void ConfirmAppointment()
    {
        Console.WriteLine("Appointment is already confirmed.");
    }

    public void CancelAppointment()
    {
        Console.WriteLine("Appointment canceled successfully.");
    }
}

public class ConfirmedState : IAppointmentState
{
    public void ConfirmAppointment()
    {
        Console.WriteLine("Appointment is already confirmed.");
    }

    public void CancelAppointment()
    {
        Console.WriteLine("Cannot cancel a confirmed appointment.");
    }
}

public class CanceledState : IAppointmentState
{
    public void ConfirmAppointment()
    {
        Console.WriteLine("Appointment is already canceled.");
    }

    public void CancelAppointment()
    {
        Console.WriteLine("Appointment is already canceled.");
    }
}

public class Appointment
{
    private IAppointmentState state;

    public Appointment()
    {
        state = new ScheduledState();
    }

    public void SetState(IAppointmentState state)
    {
        this.state = state;
    }

    public void Confirm()
    {
        state.ConfirmAppointment();
    }

    public void Cancel()
    {
        state.CancelAppointment();
        if (state is ScheduledState)
        {
            SetState(new CanceledState());
        }
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        Appointment appointment = new Appointment();

        appointment.Confirm(); 
        appointment.Cancel(); 

        appointment.SetState(new ConfirmedState());

        appointment.Confirm(); 
        appointment.Cancel(); 
    }
}
