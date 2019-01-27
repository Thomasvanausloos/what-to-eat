package be.thomas.whattoeat;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.cors.CorsConfiguration;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(final HttpSecurity http) throws Exception {
        super.configure(http);
        http.authorizeRequests()
            // TODO: remove this permitAll when adding security !
                .anyRequest().permitAll()
//            .antMatchers("/", "/login").permitAll()
//            .anyRequest().authenticated()
//            .and()
//            .formLogin().defaultSuccessUrl("http://localhost:8081/home")
            .and()
            .cors().configurationSource(request -> getCorsConfiguration())
            .and()
            .csrf().disable();
    }

    @SuppressWarnings("ExecutableStatementCount")
    private CorsConfiguration getCorsConfiguration() {
        final CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.addAllowedOrigin("http://localhost:4200");
        corsConfiguration.addAllowedMethod("POST");
        corsConfiguration.addAllowedMethod("GET");
        corsConfiguration.addExposedHeader("Location");
        corsConfiguration.addAllowedHeader("Origin");
        corsConfiguration.addAllowedHeader("X-Requested-With");
        corsConfiguration.addAllowedHeader("Content-Type");
        corsConfiguration.addAllowedHeader("Accept");
        corsConfiguration.setAllowCredentials(true);
        return corsConfiguration;
    }
}
