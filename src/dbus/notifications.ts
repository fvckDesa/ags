export const NotificationIFace = `
<node>
    <interface name="org.freedesktop.Notifications">
        <method name="Notify">
            <arg type="s" direction="in"/>
            <arg type="u" direction="in"/>
            <arg type="s" direction="in"/>
            <arg type="s" direction="in"/>
            <arg type="s" direction="in"/>
            <arg type="as" direction="in"/>
            <arg type="a{sv}" direction="in"/>
            <arg type="i" direction="in"/>
            <arg type="u" direction="out"/>
        </method>
        <method name="CloseNotification">
            <arg type="u" direction="in" name="id"/>
        </method>
        <method name="GetCapabilities">
            <arg type="as" direction="out"/>
        </method>
        <method name="GetServerInformation">
            <arg type="s" direction="out"/>
            <arg type="s" direction="out"/>
            <arg type="s" direction="out"/>
            <arg type="s" direction="out"/>
        </method>
        <signal name="NotificationClosed">
            <arg type="u"/>
            <arg type="u"/>
        </signal>
        <signal name="ActionInvoked">
            <arg type="u"/>
            <arg type="s"/>
        </signal>
    </interface>
</node>`;
